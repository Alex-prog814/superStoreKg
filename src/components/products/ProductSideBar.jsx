import React from 'react';
import '../../styles/ProductSideBar.css';
import FilterProduct from './FilterProduct';
import { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';

const ProductSideBar = ({ isSideBar, setPage }) => {
    const { products, getProducts } = useProducts();
      // search logic
    // получаем запрос, который летит после основного юрл
    // console.log(window.location.search);
    // такая тема, юз сеарч парамс устанавливает значения поиска в адресную строку, сам хук возвращает объект с ключом поиска и тем что ищут, а также возвращает функцию для управления этим самым поиском соответственно
    // NO
    const [searchParams, setSearchParams] = useSearchParams();

    // создали локальное состояние, начальное значение это то что было в поисковой строке, если такого нет, просто пустая строка
    // NO
    const [search, setSearch] = useState(searchParams.get("q") || "");

    // этот юз эффект реагирует на изменение местного состояния(которое используется для связывания инпута), если состояние меняется, то он сражу же устанавливает значение в поисковую строку
    useEffect(() => {
        setSearchParams({
        q: search,
        });
    }, [search, ]);

    // а этот юз эффект уже смотрит непосредственно на сам поисковый запрос, если он меняется, то вызывается перерисовка всех продуктов, соответствуя условиям поиска(не забыть также изменить юрлку для поиска продуктов)
    useEffect(() => {
        getProducts();
        // НЕ ЗАБЫТЬ ПРИ ПАГИНАЦИИ!!!!!!!=======================
        // когда обновляются параметры поиска, мы устанавливаем страницу в начальное положение, так как исходные данные с сервера всегда приходят разные
        setPage(1);
    }, [searchParams, ]);

  return isSideBar ? (
      <div className="sideBar">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
          <FilterProduct />
      </div>
  ) : (
      null
  )
}

export default ProductSideBar