import { useColorMode } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { config } from '../../config'
import chroma from 'chroma-js'
const settings = config.work.code.select

const menu = (provided: any) => {
    Object.assign(provided, { zIndex: 1000 })
    const { colorMode } = useColorMode()
    const [bg, setBg] = useState('')
    useEffect(() => setBg(settings.bg[colorMode]), [colorMode])
    return {
        ...provided,
        backgroundColor: bg,
    }
}

const control = (provided: any, { isFocused }) => {
    const { colorMode } = useColorMode()
    const [bg, setBg] = useState('')
    useEffect(() => setBg(settings.bg[colorMode]), [colorMode])
    return {
        ...provided,
        width: '100%',
        backgroundColor: bg,
        borderColor: bg,
        border: isFocused ? 0 : 0,
        // This line disable the blue border
        boxShadow: isFocused ? 0 : 0,
        '&:hover': {
            border: isFocused ? 0 : 0,
        },
    }
}

const singleValue = (provided: any) => {
    const { colorMode } = useColorMode()
    const [textColor, setTextColor] = useState('')
    useEffect(() => setTextColor(settings.mainText[colorMode]), [colorMode])
    return {
        ...provided,
        color: textColor,
    }
}

const option = (provided: any, { data, isFocused, isSelected }) => {
    const { colorMode } = useColorMode()
    const [textColor, setTextColor] = useState('')
    useEffect(() => setTextColor(settings.mainText[colorMode]), [colorMode])
    const color = chroma(data.color[colorMode])
    return {
        ...provided,
        backgroundColor: isSelected
            ? data.color[colorMode]
            : isFocused
            ? color.alpha(0.1).css()
            : null,
        color: isSelected
            ? chroma.contrast(color, 'white') > 2
                ? 'white'
                : 'black'
            : textColor,

        ':active': {
            ...provided[':active'],
            backgroundColor: isSelected
                ? data.color[colorMode]
                : color.alpha(0.3).css(),
        },
    }
}

export default {
    menu: menu,
    control: control,
    singleValue: singleValue,
    option: option,
}
