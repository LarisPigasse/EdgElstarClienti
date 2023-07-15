import React, { cloneElement } from 'react'
import Logo from 'components/template/Logo'
import { APP_NAME } from 'constants/app.constant'

const Side = ({ children, content, ...rest }) => {
    return (
        <div className="grid lg:grid-cols-3 h-full">
            <div
                className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex"
                style={{
                    backgroundImage: `url('/img/others/auth-side-bg.jpg')`,
                }}
            >
                <Logo mode="dark" />
                <div>
                    <div className="mb-6 flex items-center gap-4">
                        <div className="text-white">
                            <div className="font-semibold text-base">
                                Tiziano Valeri
                            </div>
                            <span className="opacity-80">Direzione generale</span>
                        </div>
                    </div>
                    <p className="text-lg text-white opacity-90">
                        Gestione attività, processi e servizi. 
                    </p>
                </div>
                <div className=' h-64'>&nbsp</div>
                <div className=' h-64'>&nbsp</div>

                <span >
                    <img  src='logoEdgDark.png' alt={`${APP_NAME} logo`} />
                </span>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
                <div className="xl:min-w-[450px] px-8">
                    <div className="mb-8">{content}</div>
                    {children ? cloneElement(children, { ...rest }) : null}
                </div>
            </div>
        </div>
    )
}

export default Side
