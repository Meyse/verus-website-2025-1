import {NextResponse} from 'next/server'

import {getAllProjects} from '@/features/projects/server/projects'

export const revalidate = 3600

export async function GET() {
  const projects = await getAllProjects()

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    projects,
  })
}

