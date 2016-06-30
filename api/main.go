package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

var count = 0

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":9010", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Print("got request")
	count++
	var encoder = json.NewEncoder(w)
	encoder.Encode(map[string]string{
		"count": strconv.Itoa(count),
		"ip":    r.RemoteAddr,
	})
}
