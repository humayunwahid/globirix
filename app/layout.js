// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import "@/node_modules/react-modal-video/css/modal-video.css"
import "/public/css/bootstrap.css"
import "/public/css/swiper-bundle.min.css"
import "/public/css/odometer.min.css"
import "/public/css/magnific-popup.min.css"
import "/public/css/animate.min.css"
import "/public/css/animate2.min.css"
import "/public/css/textanimation.css"
import "/public/font/fonts.css"
import "/public/icons/icomoon/style.css"
import "/public/icons/flaticon/font/flaticon_saylo.css"
import "/public/css/styles.css"
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})
export const metadata = {
    title: 'Globirix',
    description: 'Globirix',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${publicSans.className}`}>{children}</body>
        </html>
    )
}
