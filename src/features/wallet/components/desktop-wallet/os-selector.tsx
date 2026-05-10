import {headers} from 'next/headers'
import {userAgent} from 'next/server'

import {getDesktopWallets} from '@/features/wallet/server/get-desktop-wallets'
import {getOSName} from '@/features/wallet/utils/get_os_name'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {OsSelectorTabContent} from './os-selector-tab'

export async function OsSelector() {
  const headersList = await headers()
  const {os} = userAgent({headers: headersList})

  const {mainnet, testnet, error} = await getDesktopWallets()

  const currentOS = getOSName(os)

  return (
    <>
      <Tabs defaultValue="mainnet">
        <TabsContent value="mainnet">
          <OsSelectorTabContent
            currentOS={currentOS}
            gitHubError={error}
            repoInfo={mainnet}
          />
        </TabsContent>

        <TabsContent value="testnet">
          <OsSelectorTabContent
            currentOS={currentOS}
            gitHubError={error}
            repoInfo={testnet}
            isTestnet
          />
        </TabsContent>
        <div className="mt-3 flex items-center">
          <div className="mr-3 text-sm font-medium text-gray-800 dark:text-white">
            Version:{' '}
          </div>

          <TabsList className="h-auto overflow-hidden border border-gray-300 p-0 dark:border-gray-600">
            <TabsTrigger
              value="mainnet"
              className="px-4 text-white transition-colors data-[state=active]:bg-blue-600 data-[state=active]:dark:bg-blue-700"
            >
              Mainnet
            </TabsTrigger>
            <TabsTrigger
              value="testnet"
              disabled={!testnet}
              className="bg-white px-4 text-gray-700 transition-colors hover:bg-gray-100 data-[state=active]:bg-amber-500 data-[state=active]:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 data-[state=active]:dark:bg-amber-500 data-[state=active]:dark:text-black"
            >
              Testnet
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </>
  )
}
