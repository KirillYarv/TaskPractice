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
    public function selectBook()
    {
        $select_query = "select 
                            id, 
                            Name, 
                            Date, 
                            TextComment 
                        from book";
        $this->result = $this->db->query($select_query)->fetchAll(PDO::FETCH_ASSOC);
        return $this->result;
    }

    public function insertBook($post)
    {
        if(!$this->result)
        {
            $this->selectBook();
        }
        
        $id = $this->result[count($this->result)-1]['id']+1;
        $name = $_POST['name'];
        if($name == "")
        {
            $name = "Анонимно";
        }
        $date = date("d.m.Y h:i");
        $textComment = $_POST['textComment'];

        $this->db->query("insert into book(id, Name, Date, TextComment) 
        values ('{$id}', 
        '{$name}',
        '{$date}',
        '{$textComment}')");
    }
}

?>