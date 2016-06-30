package main

import "fmt"

func generateString(str string) string {
	return str + "?"
}

func main() {
	var dictionary = make(map[string]int)
	dictionary["a"] = 4
	dictionary["b"] = 42
	var array = [4]int{1, 2, 3, 4}
	fmt.Print(dictionary)
	fmt.Print(array)
}
