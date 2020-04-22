import { Text, Box, Flex, Input, useColorMode } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { GetApi } from '../helper'
import { config } from '../config'
const settings = config.work.codeforces

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
            const res = await GetApi(
                'https://codeforces.com/api/user.rating?handle=' + handle
            )
            if (res === undefined) {
                setShowChart(false)
                return
            }
            setShowChart(true)
            const rating = res.result.map((val: any) => {
                return val.newRating
            })
            const label = rating.map((val: any) => {
                return ''
            })
            const bgColor = rating.map((val: any) => {
                return settings.color[colorMode](val)
            })
            const newdata = initialData.datasets[0]
            newdata.data = rating
            newdata.backgroundColor = bgColor
            newdata.pointHoverBackgroundColor = bgColor
            const newState = {
                ...initialData,
                labels: label,
                datasets: [newdata],
            }
            setData(newState)
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
