<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cv extends Model
{
    protected $fillable = [
      'personal', 'education', 'experience', 'cv_text'
    ];
    protected $casts = [
      'personal'   => 'array',
      'education'  => 'array',
      'experience' => 'array',
    ];
}
