/**
 * <S> → Representando State
 * <T> → Representando Type
 * <K> → Representando Key
 * <V> → Representando Value
 * <E> → Representando Element
 */

function useState<T extends number | string = string>() {
    let state: T

    function get() {
        return state
    }

    function set(newState: T) {
        state = newState
    }

    return { get, set }
}

let newState = useState<number>()
newState.set(10)
newState.set('jao')
newState.get()
console.log(newState.get())
