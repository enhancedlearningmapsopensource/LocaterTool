module.exports = {
    props: {
        servicesport: 9090,
        assetsFolder: "/assets",
        dataRoot: "/data",
        viewsFolder: "/public/views",
        logdir: "/Users/c591n060/Documents/ELM/elm-kmap/logs/",
        logLevel: "debug",
        logSize: 104857600,
        logFileName: "/elm_nodejs.log",
        logDatePattern: ".yyyy-MM-dd",
        logJSON: false,
        devEnv: false,
        datatempfolder: "/Users/c591n060/Documents/ELM/elm-kmap/data/temp/",
        datafolder: "/Users/c591n060/Documents/ELM/elm-kmap/data/testbuilderfiles/",
        filestore: "/Users/c591n060/Documents/ELM/elm-kmap/data/",
        relativepath: "/nodelocater/data/testbuilderfiles/", // Should start with '/' - This path is the path relative to server, so localhost:9090/data/testbuilderfiles will point to the data folder.
        mailProps: {
            mailServer: "smtp.gmail.com",
            username: "enhancedlmmail@gmail.com", // and from address
            password: "nodelocater",
            port: "587", // If null/empty default will be used
            toAddress: "enhancedlm@ku.edu" //Comma seperated for multiple recipients
        }
    }
}