const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        resolve (setTimeout(() => {
            let success = {'message': 'delayed success!'}
            console.log(success);
        }, 500))
        })

}
resolvedPromise()

const rejectedPromise = () => {
    try{
        return new Promise((resolve, reject) => {
            reject (setTimeout(() => {
                let errorDelayedException = {'error': 'delayed exception!'}
                console.log(errorDelayedException);
            }, 500))
            })
    }
    catch (e) {
        let errorDelayedException = {'error': 'delayed exception!'}
        console.log(errorDelayedException);
      };

}
rejectedPromise();