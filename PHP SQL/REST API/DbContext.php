<?php

class DbContext
{
    private $db;
    public $result;

    public function __construct()
    {   
        $sqlitePath = "sqlite:db.sqlite";
        $this->db = new PDO($sqlitePath);
    }
    public function select()
    {
        $select_query = "select 
                            id, 
                            Name, 
                            Price, 
                            Count,
                            Info 
                        from product";
        $this->result = $this->db->query($select_query)->fetchAll(PDO::FETCH_ASSOC);
        return $this->result;
    }

    public function insert(ProductModel $productModel) : void
    {
        if(!$this->result)
        {
            $this->select();
        }
        
        $id = $this->result[count($this->result)-1]['id']+1;
        

        $this->db->query("insert into product(id, Name, Price, Count, Info) 
        values ('{$id}', 
        '{$productModel->name}',
        '{$productModel->price}',
        '{$productModel->count}',
        '{$productModel->info}')");
    }

    public function put(int $id) : void {
        
    }
    public function delete(int $id) : void {
        
    }
    
}
