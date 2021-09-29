import {
    reactive
} from "vue";
export function getHandpose(video) {

    let obj = reactive({});

    let options = {
        video: true
    };
    navigator.mediaDevices.getUserMedia(options).then((mediaStream) => {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            const handpose = ml5.handpose(video, modelLoaded);

            function modelLoaded() {
                console.log("Model Loaded!");
            }

            // Listen to new 'predict' events
            handpose.on("predict", (results) => {
                obj = results[0].annotaions.thumb[0];
            });
        };
    });
    // Create a new handpose method

    return obj;
}