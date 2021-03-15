<?php

namespace app\models;

use Yii;
use yii\base\Model;

class GestorModelos extends Model
{
    public function ListarModelos()
    {
        $sql = 'CALL dsp_listar_modelos';

        $query = Yii::$app->db->createCommand($sql);

        return $query->queryAll();
    }
}