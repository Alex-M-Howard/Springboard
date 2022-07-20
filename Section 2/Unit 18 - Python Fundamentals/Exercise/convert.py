def convert_temp(unit_in, unit_out, temp):
    """Convert farenheit <-> celsius and return results.

    - unit_in: either "f" or "c" 
    - unit_out: either "f" or "c"
    - temp: temperature (in f or c, depending on unit_in)

    Return results of conversion, if any.

    If unit_in or unit_out are invalid, return "Invalid unit [UNIT_IN]".

    For example:

      convert_temp("c", "f", 0)  =>  32.0
      convert_temp("f", "c", 212) => 100.0
    """
    # Your code here!
    if unit_in.lower() != 'c' and unit_in.lower() != 'f': return 'Invalid Unit!'
    if unit_out.lower() != 'c' and unit_out.lower() != 'f': return 'Invalid Unit!'
    if unit_in.lower() == unit_out.lower(): return temp
    if unit_in.lower() == 'c': return round((temp * 5/9) + 32, 1) 
    if unit_in.lower() == 'f': return round((temp - 32) * 5/9, 1)
    


print("c", "f", 0, convert_temp("c", "f", 0), "should be 32.0")
print("f", "c", 212, convert_temp("f", "c", 212), "should be 100.0")
print("z", "f", 32, convert_temp("z", "f", 32), "should be Invalid unit z")
print("c", "z", 32, convert_temp("c", "z", 32), "should be Invalid unit z")
print("f", "f", 75.5, convert_temp("f", "f", 75.5), "should be 75.5")

