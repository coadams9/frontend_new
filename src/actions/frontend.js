export function carFilter(arr, searchTerm) {
    return arr.filter(car => car.color.toLowerCase().includes(searchTerm.toLowerCase()) || car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.modelMake.toLowerCase().includes(searchTerm.toLowerCase()) || car.price.toLowerCase().includes(searchTerm.toLowerCase()) || car.year.toLowerCase().includes(searchTerm.toLowerCase()))
}