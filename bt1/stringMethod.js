let text = "Cong hoa xa hoi chu nghia viet nam, doc lap , tu do hanh phuc -" + 
    "be di mau giao - " + "me di lam -" + "ba di hoc"
    console.log(text);
    console.log('me :'+text.indexOf("me")); //tim tu tria qua phai
    console.log('ba :'+text.lastIndexOf('ba')); //tim tu phai qua trai
    let findText = text.search(/g..o/);
    console.log(findText);

    let addr = "tuan 0935009112 26 cao ba quat"
    let findAddr = addr.search(/[0-9]+/);
    console.log('vi tri tim so dien thoai : '+findAddr);

    // tim va thay the 1 chuoi nao do
    let text_2 = "A Hai lam giam doc, a hai rat gioi ve ky thuat cong nghe thong tin"
    let findText_2 = text_2.replace(/HAI/ig,'tuanpm')
    console.log(findText_2)

    let str = "tuan, truc, chau, ngan"
    let sliceStr = str.slice(6,10);
    let SliceStr = str.slice(-9,-6);
    console.log(sliceStr);
    console.log(SliceStr);


