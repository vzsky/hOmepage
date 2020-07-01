import { Text, Box, Flex, Input, useColorMode } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { GetApi } from '../helper'
import settings from '../config/codeforces'

const initialData = {
  labels: ['', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'Rating',
      fill: false,
      data: [1, 1200, 1400, 1600, 1900, 2100, 2300, 2400, 2600, 3000],
      backgroundColor: [],
      pointHoverBackgroundColor: [],
    },
  ],
}

initialData.datasets[0].backgroundColor = initialData.datasets[0].data.map(
  (val: number) => settings.color.light(val)
)
initialData.datasets[0].pointHoverBackgroundColor = initialData.datasets[0].data.map(
  (val: number) => settings.color.light(val)
)

export default () => {
  const { colorMode } = useColorMode()
  const [inputBg, setInputBg] = useState('')
  const [options, setOptions] = useState(null)

  useEffect(() => {
    setInputBg(settings.inputBg[colorMode])
    setOptions(settings.chartOptions[colorMode])
  }, [colorMode])

  const [handle, setHandle] = useState(settings.handle)
  const [data, setData] = useState(initialData)
  const [showChart, setShowChart] = useState(false)

  useEffect(() => {
    const effect = async () => {
      let CfApi = 'https://codeforces.com/api/'
      const res = await GetApi(CfApi + 'user.rating?handle=' + handle)
      if (res === undefined || res.result === undefined) {
        setShowChart(false)
        return
      }
      setShowChart(true)
      const rating = res.result.map((val: any) => val.newRating)
      const label = rating.map((val: any) => '')
      const bgColor = rating.map((val: any) => settings.color[colorMode](val))

      setData({
        ...initialData,
        labels: label,
        datasets: [
          {
            ...initialData.datasets[0],
            data: rating,
            backgroundColor: bgColor,
            pointHoverBackgroundColor: bgColor,
          },
        ],
      })
    }

    effect()
  }, [handle, colorMode])

  return (
    <Box>
      <Flex wrap="wrap">
        <Text
          width={['100%', '100%', '50%']}
          alignSelf="center"
          justifySelf="center"
          fontSize={['sm', 'md', 'lg']}
        >
          Codeforces of
        </Text>
        <Box width={['100%', '100%', '50%']}>
          <Input
            bg={inputBg}
            value={handle}
            onChange={(e: any) => setHandle(e.target.value)}
          />
        </Box>
      </Flex>
      <Box height="300px" paddingTop={5}>
        {showChart && <Line data={data} options={options} />}
      </Box>
    </Box>
  )
}
