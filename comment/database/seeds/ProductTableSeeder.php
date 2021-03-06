<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     *
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        //Create 2 images
        for ($i = 0;$i < 2; $i++) {
            Product::create([
                'title' => $faker->title,
                'comment'=> $faker->paragraph,
                'url'=>$faker->paragraph

            ]);
        }
    }
}
