x=1
cantidadCumple=0
pieza= int(input("ingrese cantidad de pieza: "))
while x<=pieza: 
    longitudPiezas= float(input("ingrese longitud de pieza: "))
    if longitudPiezas>=1.2 and longitudPiezas<=1.3 :
        cantidadCumple=cantidadCumple+1
    x=x+1
print("la cantidad de piezas ingresadas son: ", pieza)
print("la cantidad de piezas que cumplen son: ",cantidadCumple)
