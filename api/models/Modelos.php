<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Modelos extends Model
{
    public $IdModelo;
    public $Marca;
    public $Año;
    public $Precio;
    public $ImgHome;
    public $ImgFicha;
    public $Categoria;
    public $Titulo;
    public $Descripcion;

    // Derivados
    public $Caracteristicas;
    public $CaracteristicasResaltables;

    public function rules()
    {
        return [
        
            [['IdModelo', 'Marca', 'Año', 'Precio', 'ImgHome', 'ImgFicha', 'Categoria', 'Titulo', 'Descripcion', 'Caracteristicas', 'CaracteristicasResaltables'], 'safe']
        ];
    }

    public function Dame()
    {
        $sql = 'CALL dsp_dame_modelo( :idModelo )';

        $query = Yii::$app->db->createCommand($sql);
        
        $query->bindValues([
            ':idModelo' => $this->IdModelo
        ]);
        
        $this->attributes = $query->queryOne();
        $this->Caracteristicas = json_decode($this->Caracteristicas);
        $this->CaracteristicasResaltables = json_decode($this->CaracteristicasResaltables);
    }
}