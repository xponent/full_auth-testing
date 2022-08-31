import {useAccount, useConnect, useDisconnect, useSignMessage} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useRouter} from "next/router";
import axios from "axios";

function SignIn() {

    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { push } = useRouter();

    // Web3 connections
    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector()});
        const userData = { address: account, chain: chain.id, network: 'evm' };

        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const message = data.message;
        const signature = await signMessageAsync({ message });

        const { url } = await signIn('credentials', {
            message,
            signature,
            redirect: false,
            callbackUrl: '/user'
        });
        push(url);
    };

    return (
        <div>
            <h1>Sign In With Xezom.</h1>
            <button onClick={() => handleAuth()}>Web3 Authentication</button>
        </div>
    )
}

export default SignIn;