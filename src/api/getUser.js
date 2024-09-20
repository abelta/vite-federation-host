export default () => {
    return fetch('/user').then((res) => res.json())
}
