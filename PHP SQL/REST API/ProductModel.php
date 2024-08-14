<?php
class ProductModel{
    public int $id;
    public string $name;
    public int $price;
    public int $count;
    public string $info;

    public function __construct($id, $name, $price, $count, $info) {
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
        $this->count = $count;
        $this->info = $info;
    }

    public function isNameEmpty() : bool{
        if (!$this->name) {
            return true;
        }
        return false;
    }
    public function isPriaceEmpty() : bool{
        if (!$this->price) {
            return true;
        }
        return false;
    }
    public function isCountEmpty() : bool{
        if (!$this->count) {
            return true;
        }
        return false;
    }
    public function isInfoEmpty() : bool{
        if (!$this->info) {
            return true;
        }
        return false;
    }
    
}