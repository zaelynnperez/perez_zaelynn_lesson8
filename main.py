while True:
    print( input.light_level())
    if input.light_level() >1:
        light.set_all(light.rgb(255, 255, 255))