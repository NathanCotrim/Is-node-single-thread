const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shouldContinue() {
    // Check One: Any pending setTimeout, setInterval or setImmediate?
    // Check Two: Any pending OS tasks?
    // Check Three: Any pending long running operations?
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

while (shouldContinue()) {
    // 1) Node looks at pendingTimers and sees if any functions are ready to been called

    // 2) Node looks at pendingOSTasks and pendingOperations

    // 3) Pause execution. Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete
    // ( async )

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events
}

// exit back to terminal