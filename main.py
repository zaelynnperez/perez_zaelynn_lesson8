while True:
    print( input.light_level())
    if input.light_level() >6:
        light.set_all(light.rgb(255, 255, 255))