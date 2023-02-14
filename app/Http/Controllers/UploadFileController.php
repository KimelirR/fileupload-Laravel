<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class UploadFileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res =  DB::table('image_gallary')->get();
      return Response::json($res);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!$request->file('files'))
      {
         $base64_image = $request->input('file'); // your base64 encoded
         @list($type, $file_data) = explode(';', $base64_image);
         @list(, $file_data) = explode(',', $file_data);
         $imageName = Str::random(10).'.'.'png';
         Storage::disk('public')->put($imageName, base64_decode($file_data));
          return response()->json([
          'message' => 'Image Uploaded Successfully'
         ]);
      }
      else
      {
        $name = $request->file('files');
        $path=$request->file('files')->store('/','public');
        return response()->json([
          'message' => 'File Uploaded Successfully'
         ]);
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = DB::table('image_gallary')->where('id', $id)->delete();
      return Response::json($res);
    }
}
