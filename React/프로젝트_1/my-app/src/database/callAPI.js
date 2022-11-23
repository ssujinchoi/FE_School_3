import { createContext } from 'react'

async function callAPI() {
    const res = await fetch('http://test.api.weniv.co.kr/mall')
    const result = await res.json()
    return result
}

// callAPI result를 context로 내보냄
export const callAPIResponse = createContext(callAPI())