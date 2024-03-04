import "@/styles/global.css";
import Providers from "@/utils/providers";

export default function MyApp({ Component, pageProps }) {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
}
