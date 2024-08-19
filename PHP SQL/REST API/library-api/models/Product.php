<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product".
 *
 * @property int $id
 * @property string $Name
 * @property int $Price
 * @property int $Count
 * @property string|null $Info
 */
class Product extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'product';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['Name', 'Price', 'Count'], 'required'],
            [['Name', 'Info'], 'string'],
            [['Price', 'Count'], 'integer'],
            [['Name'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'Name' => 'Name',
            'Price' => 'Price',
            'Count' => 'Count',
            'Info' => 'Info',
        ];
    }
}
