export function increment() {
   console.log("action increase")
    return {
       type: 'INCREMENT'
    }
 }
 export function decrement() {
    return {
       type: 'DECREMENT'
    }
 }
 export function reset() {
    return { type: 'RESET' }
 }