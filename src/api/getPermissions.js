export default () => {
    return fetch('/permissions').then((res) => res.json())
}
