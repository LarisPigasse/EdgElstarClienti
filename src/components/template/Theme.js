import React from 'react'
import { useSelector } from 'react-redux'
import { ConfigProvider } from 'components/ui'
import useDarkMode from 'utils/hooks/useDarkMode'
import { themeConfig } from 'configs/theme.config'

//import { setLayout } from 'store/theme/themeSlice'

const Theme = (props) => {
    const theme = useSelector((state) => state.theme)
    const locale = useSelector((state) => state.locale.currentLang)
    const [isDark] = useDarkMode()

    // const type = useSelector((state) => state.theme.layout.type)
    // const dispatch = useDispatch()
    //     useEffect(() => {
    //         if (true) {
    //             dispatch(setLayout("decked"))
    //         }
    //  },[])

    const currentTheme = {
        mode: isDark ? 'dark' : 'light',
        ...themeConfig,
        ...theme,
        ...{ locale },
    }

    return (
        <ConfigProvider value={currentTheme}>{props.children}</ConfigProvider>
    )
}

export default Theme
