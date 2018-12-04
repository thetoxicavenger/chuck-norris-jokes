const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

function functionalComponentText(componentName) {
    return `import React from 'react'

function ${componentName} (props) {
    return (
        <div>
            ${componentName}
        </div>
    )
}

export default ${componentName}`
}

function classComponentText(componentName) {
    return `import React from 'react'

class ${componentName} extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                ${componentName}
            </div>
        )
    }
}

export default ${componentName}`
}


{ // this is an IIFE
    try {
        const componentName = process.argv[2]
        if (!componentName) throw new Error("That didn't work - Please define include the new component's name.")
        if (!process.argv[3]) throw new Error("That didn't work - Please define the path of the components folder.")
        const componentPath = path.join(process.argv[3], `${componentName}.js`)
        if (process.argv[4] !== "func" && process.argv[4] !== "class") throw new Error("That didn't work - Please specify whether you want a functional or class-based component.")

        const componentFileText = process.argv[4] === "func" ? functionalComponentText(componentName) : classComponentText(componentName)
        
        fs.writeFileSync(componentPath, componentFileText)
        console.log(chalk.green(`${componentName} created at ${componentPath}`))
    } catch (e) {
        console.error(chalk.red(e))
        process.exit(1)
    }
    
}
