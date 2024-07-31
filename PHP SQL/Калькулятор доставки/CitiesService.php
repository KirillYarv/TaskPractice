<?php 
    class DataResponse
    {
        protected $path;
        public function __construct($path)
        {
            $this->path = $path;
        }
    }
    interface DataResponseGet
    {
        public function get();
    }

    interface DataResponsePost
    {
        public function post($data);
    }

    class DataResponseFile extends DataResponse implements DataResponseGet, DataResponsePost
    {
        public function get()
        {
            $result = file_get_contents($this->path);
                        
            $cities = explode(" ",$result);

            return $cities;
        }
        public function post($data)
        {
            file_put_contents($this->path, $data, FILE_APPEND);
        }
    }

    class DataResponseAPI extends DataResponse implements DataResponseGet
    {
        public function get()
        {
            $data = @file_get_contents($this->path);
                        
            if($http_response_header[0] == "HTTP/1.1 200 OK")
            {
                return json_decode($data, true);
            }
            return null;
        }
    }

    class CitiesService
    {
        private $path = "cities.txt";

        public function cashing()
        {
            $dataResponseFile = new DataResponseFile($this->path);
            $dataResponseAPI = new DataResponseAPI("http://exercise.develop.maximaster.ru/service/city/");
            
            $cities = array();
            
            $is_today_changed_file = (strtotime(date("d.m.Y")) == strtotime(date("d.m.Y",filemtime($this->path))));
            
            if(file_exists($this->path) && $is_today_changed_file)
            {
                $cities = $dataResponseFile->get();
            }
            else
            {
                $cities = $dataResponseAPI->get();
                for($i = 0; $i < count($cities);$i++)
                {
                    if($i+1 == count($cities))
                    {
                        $dataResponseFile->post($cities[$i]);
                    }
                    else
                    {
                        $dataResponseFile->post($cities[$i]." ");
                    }
                }    
            }
            
            $cities = $this->replaceMoscow($cities);

            return $cities;
        }

        private function replaceMoscow($cities)
        {
            $moscowKey = array_search("Москва", $cities);
            $temp = $cities[0];
            $cities[0] = $cities[$moscowKey];
            $cities[$moscowKey] = $temp;
            unset($temp);

            return $cities;
        }
    }
?>