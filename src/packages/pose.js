import {
    reactive
} from "vue";
export function getDistance(video) {
    let left = {};
    let right = {};
    let distance = reactive({});
    let options = {
        video: true
    };
    navigator.mediaDevices.getUserMedia(options).then((mediaStream) => {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function () {
            const poseNet = ml5.poseNet(video, modelLoaded);

            // When the model is loaded
            function modelLoaded() {
                console.log("Model Loaded!");
            }
            // Listen to new 'pose' events
            poseNet.on("pose", (results) => {
                left = results[0].pose.leftElbow;
                right = results[0].pose.rightElbow;
                distance.x = left.x - right.x;
                distance.y = left.y - right.y;
            });
        };
    });
    // Create a new poseNet method

    return {
        distance
    };
}