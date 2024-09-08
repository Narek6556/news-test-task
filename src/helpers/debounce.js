export default function debounce({ cb, wait = 1000 }) {
    console.log("cb", cb);
    let timer;

    return (args) => {
        if (timer != null) clearTimeout(timer);
        console.log("args: ", args);

        timer = setTimeout(() => cb(args), wait);
    };
}
