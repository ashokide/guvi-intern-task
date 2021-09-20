<?php
    include 'connection.php';
    session_start();
    $username = $_SESSION["username"];
    $sql = "SELECT * FROM details WHERE username = ?";
    $statement = $con->prepare($sql);
    $statement->bind_param('s', $username);
    $statement->execute();
    $result = $statement->get_result();
    if ($result->num_rows > 0) {
        $result = $result->fetch_assoc();
        echo json_encode(["code"=>true,
        "username"=>$result["username"],
        "age"=>$result["age"],
        "dob"=>$result["dob"],
        "contact"=>$result["contact"],
        "city"=>$result["city"],
    ]);
    }
    else{
        echo json_encode(["code"=>false,
        "username"=>$_SESSION["username"],
    ]);
}
?>