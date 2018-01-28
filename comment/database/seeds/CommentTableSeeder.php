<?php

use Illuminate\Database\Seeder;
use App\Comment;

class CommentTableSeeder extends Seeder
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
        for ($i = 0;$i < 10; $i++) {
            Comment::create([
                'name' => $faker->title,
                'comment'=> $faker->paragraph,
                'url'=>$faker->title

            ]);
        }
    }
}
