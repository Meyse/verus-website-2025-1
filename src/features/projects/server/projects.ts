import 'server-only'

import fs from 'fs'
import path from 'path'

import {parse} from 'yaml'

import type {Project} from '../types'

import {fetchGitHubData, parseGitHubUrl} from '../github'
import {validateProjectYAML, validateSlug} from '../validation'

const PROJECTS_DIR = path.join(process.cwd(), 'data', 'projects')
const PROJECT_IMAGES_DIR = path.join(process.cwd(), 'public', 'img', 'projects')

function getProjectImageDir(slug: string) {
  return path.join(PROJECT_IMAGES_DIR, slug)
}

function getProjectLogo(slug: string) {
  const projectDir = getProjectImageDir(slug)
  if (!fs.existsSync(projectDir)) return undefined

  if (fs.existsSync(path.join(projectDir, 'logo.png'))) return 'logo.png'
  if (fs.existsSync(path.join(projectDir, 'logo.jpg'))) return 'logo.jpg'
  if (fs.existsSync(path.join(projectDir, 'logo.webp'))) return 'logo.webp'

  return undefined
}

function parseProjectFile(filePath: string, filename: string) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const parsed = parse(content)

  return validateProjectYAML(parsed, filename)
}

async function hydrateProject(
  filePath: string,
  filename: string
): Promise<Project | null> {
  try {
    const project = parseProjectFile(filePath, filename)
    const github = await fetchGitHubData(project.repoUrl)
    const parsedRepo = project.repoUrl ? parseGitHubUrl(project.repoUrl) : null
    const maintainer =
      project.maintainer || parsedRepo?.owner || 'Verus community'

    return {
      ...project,
      github,
      logo: getProjectLogo(project.slug),
      maintainer,
    } satisfies Project
  } catch (error) {
    console.error(
      `Failed to parse project file ${filename}:`,
      error instanceof Error ? error.message : error
    )

    return null
  }
}

export async function getAllProjects() {
  if (!fs.existsSync(PROJECTS_DIR)) return []

  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.yaml') && !file.startsWith('_'))

  const projects = await Promise.all(
    files.map((file) => hydrateProject(path.join(PROJECTS_DIR, file), file))
  )

  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => a.name.localeCompare(b.name))
}

export async function getProjectBySlug(slug: string) {
  const validSlug = validateSlug(slug)
  if (!validSlug) return null

  const filePath = path.join(PROJECTS_DIR, `${validSlug}.yaml`)
  const resolvedPath = path.resolve(filePath)

  if (!resolvedPath.startsWith(path.resolve(PROJECTS_DIR))) return null
  if (!fs.existsSync(filePath)) return null

  return hydrateProject(filePath, `${validSlug}.yaml`)
}
