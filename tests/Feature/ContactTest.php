<?php

use App\Models\Contact;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactTest extends TestCase
{
    use RefreshDatabase;

    public function testContactStore()
    {
        $response = $this->post(route('contact.store'), [
            'name' => 'Mario Rossi',
            'email' => 'mario@example.com',
            'message' => 'Ciao, questo è un messaggio di prova.',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('contacts', [
            'email' => 'mario@example.com',
        ]);
    }
}
