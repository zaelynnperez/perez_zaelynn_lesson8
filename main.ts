while (true) {
    console.log(input.lightLevel())
    if (input.lightLevel() > 1) {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
