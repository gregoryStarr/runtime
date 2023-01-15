const Logger = (function () {
  let logInstance = {}  
  let instance = {logInstance:logInstance}
    

    const log = (message) => {
        if (typeof message === String) {
        }
        logInstance.log.set(message)
    }

    

    const printLog = () => {
        const i = new Map()
        const logDump = []
        const logStr = ''
        this.logInstance.log.forEach((message) => {
            logDump.push(message)
            logStr += `Message: > ${message.data} < : MessagheEnd `
        })
        return {
            logArray: logDump,
            formattedLog: logStr,
            logJSON: JSON.stringify(logDump),
        }
    }

    const createInstance = (scope, uniqueID) => {
        scope[uniqueID].log = new Map()
        logInstance.log = scope[uniqueID].log
    }

    const getInstance = (scope, uniqueID) => {
      if (!instance) {
          instance = createInstance(scope, uniqueID)
      }
      return instance

      return getInstance
  }
})()

export { Logger}
