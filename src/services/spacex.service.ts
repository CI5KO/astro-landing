export async function getSpaceXLaunches(): Promise<any[]> {
  const response: Response = await fetch(
    'https://api.spacexdata.com/v5/launches/query',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {},
        options: {
          sort: {
            date_unix: 'asc'
          },
          limit: 12
        }
      })
    }
  )
  const { docs: launches } = await response.json()
  return launches
}

export async function getSpaceXLaunchById({
  id
}: {
  id: string | number
}): Promise<any[]> {
  const response: Response = await fetch(
    `https://api.spacexdata.com/v5/launches/${id}`
  )
  const launch = await response.json()
  return launch
}
