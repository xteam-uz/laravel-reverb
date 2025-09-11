<?php

namespace App\Http\Controllers;

use App\Events\MessageSentEvent;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        echo 'Index file';
    }

    public function store(Request $request)
    {
        $message = Message::create(['text' => $request->message]);

        broadcast(new MessageSentEvent($message));

        return response()->json([
            'message' => "Message {$message->id} saved"
        ]);
    }
}
