<?php
// 1. Imposta l’header per il JSON e il charset
header('Content-Type: application/json; charset=utf-8');  // specifica il MIME type per JSON :contentReference[oaicite:0]{index=0}
// 2. Abilita richieste da qualsiasi origine (CORS)
header('Access-Control-Allow-Origin: *');                // necessario se il client è su dominio diverso :contentReference[oaicite:1]{index=1}

// 3. Logica: qui restituiamo true o false
$result = true;

// 4. Codifica e invia il JSON
echo json_encode(['ok' => $result]);   

?>
