while True:
    print( input.sound_level())
    if input.sound_level() >1:
        light.set_all(light.rgb(255, 255, 255))