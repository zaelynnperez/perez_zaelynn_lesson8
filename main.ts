while (true) {
    console.log(input.soundLevel())
    if (input.soundLevel() > 6) {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
