package main

import (
 "fmt"
 "net/http"
)

func main() {
 http.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {
  w.WriteHeader(http.StatusOK)
  fmt.Fprintf(w, "Backend is running")
 })

 http.ListenAndServe(":8080", nil)
}