while (true) {
    console.log(input.soundLevel())
    if (input.soundLevel() > 1) {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
